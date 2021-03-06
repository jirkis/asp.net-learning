﻿using System;
using System.Collections.Generic;
using System.Linq;

using Omu.ValueInjecter;

namespace Mvc5Awesome.Models
{
    public class Entity
    {
        public int Id { get; set; }
    }

    public class Chef : Entity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Country Country { get; set; }
    }

    public class Country : Entity
    {
        public string Name { get; set; }
    }

    public class Category : Entity
    {
        public string Name { get; set; }
    }

    public class Meal : Entity
    {
        public Category Category { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class Dinner : Entity
    {
        public string Name { get; set; }
        public DateTime Date { get; set; }
        public Chef Chef { get; set; }
        public Country Country { get; set; }
        public IEnumerable<Meal> Meals { get; set; }
        public int? BonusMealId { get; set; }
    }

    public static class Db
    {
        public static IList<Country> Countries = new List<Country>();
        public static IList<Chef> Chefs = new List<Chef>();
        public static IList<Meal> Meals = new List<Meal>();
        public static IList<Category> Categories = new List<Category>();
        public static IList<Dinner> Dinners = new List<Dinner>();

        public static int Gid = 75;

        public static object Set<T>()
        {
            if (typeof(T) == typeof(Country)) return Countries;
            if (typeof(T) == typeof(Chef)) return Chefs;
            if (typeof(T) == typeof(Meal)) return Meals;
            if (typeof(T) == typeof(Dinner)) return Dinners;
            if (typeof(T) == typeof(Category)) return Categories;
            return null;
        }

        public static IDictionary<Type, IList<object>> Tables = new Dictionary<Type, IList<object>>
                                                                    {
                                                                        { typeof(Country), Countries.Cast<object>().ToList() },
                                                                        { typeof(Chef), Chefs.Cast<object>().ToList() },
                                                                        { typeof(Meal), Meals.Cast<object>().ToList() },
                                                                        { typeof(Dinner), Dinners.Cast<object>().ToList() },
                                                                        { typeof(Category), Categories.Cast<object>().ToList() },
                                                                    };

        public static T Insert<T>(T o) where T : Entity
        {
            o.Id = ++Gid;
            ((IList<T>)Set<T>()).Add(o);
            return o;
        }

        public static void Update<T>(T o) where T : Entity
        {
            var t = Get<T>(o.Id);
            t.InjectFrom(o);
        }

        public static T Get<T>(int? id) where T : Entity
        {
            return ((IList<T>)Set<T>()).SingleOrDefault(o => o.Id == id);
        }

        public static void Delete<T>(int id) where T : Entity
        {
            ((IList<T>)Set<T>()).Remove(Get<T>(id));
        }

        static Db()
        {
            Insert(new Category { Name = "Fruits" });
            Insert(new Category { Name = "Legumes" });
            Insert(new Category { Name = "Vegetables" });
            Insert(new Category { Name = "Nuts" });
            Insert(new Category { Name = "Grains" });

            Insert(new Meal { Name = "Mango", Category = Categories[0], Description = "The mango is a fleshy stone fruit belonging to the genus Mangifera" });
            Insert(new Meal { Name = "Apple", Category = Categories[0], Description = "The apple is the pomaceous fruit of the apple tree" });
            Insert(new Meal { Name = "Papaya", Category = Categories[0], Description = "The papaya is a large tree-like plant, with a single stem growing from 5 to 10 metres" });
            Insert(new Meal { Name = "Banana", Category = Categories[0], Description = "Bananas come in a variety of sizes and colors when ripe, including yellow, purple, and red." });
            Insert(new Meal { Name = "Cherry", Category = Categories[0], Description = "The cherry is the fruit of many plants of the genus Prunus, and is a fleshy stone fruit" });

            Insert(new Meal { Name = "Tomato", Category = Categories[1], Description = "The tomato fruit is consumed in diverse ways, including raw, as an ingredient in many dishes and sauces" });
            Insert(new Meal { Name = "Potato", Category = Categories[1], Description = "A potato is a starchy edible tuber native to South America and cultivated all over the world" });
            Insert(new Meal { Name = "Cucumber", Category = Categories[1], Description = "Like the tomato, the cucumber is a fruit. Botanically speaking, a fruit is the mature ovary of a flowering plant" });
            Insert(new Meal { Name = "Onion", Category = Categories[1], Description = " It is possible to chop the greens into small pieces for salads and as a garnish" });
            Insert(new Meal { Name = "Carrot", Category = Categories[1], Description = "The rich orange color of carrots comes from beta carotene, which also happens to be very good for optical health" });

            Insert(new Meal { Name = "Celery", Category = Categories[2], Description = "Although originally cultivated for its perceived medicinal qualities, celery has since made the jump into the daily diets" });
            Insert(new Meal { Name = "Broccoli", Category = Categories[2], Description = "Sometimes broccoli is compared to tiny trees" });
            Insert(new Meal { Name = "Artichoke", Category = Categories[2], Description = "The globe artichoke enjoys a long history of both lore and cooking preparation" });
            Insert(new Meal { Name = "Cauliflower", Category = Categories[2], Description = "As a general rule, the head is white, but variants of cauliflower come in purple and green as well" });
            Insert(new Meal { Name = "Lettuce", Category = Categories[2], Description = "Leaf lettuce is often very lightweight and ruffly, with a wrinkly surface and a soft, almost velvety texture" });

            Insert(new Meal { Name = "Hazelnuts", Category = Categories[3], Description = "Hazelnuts are produced by hazel trees" });
            Insert(new Meal { Name = "Chestnuts", Category = Categories[3], Description = "They have creamy white sweet flesh which appears in a number of cuisines" });
            Insert(new Meal { Name = "Walnuts", Category = Categories[3], Description = "A walnut is a seed from a tree in the genus Juglans" });
            Insert(new Meal { Name = "Almonds", Category = Categories[3], Description = "Almonds come in two varieties, sweet and bitter" });
            Insert(new Meal { Name = "Mongongo", Category = Categories[3], Description = "In addition to producing a highly useful lightweight, durable wood, the mongongo tree also yields a distinctive fruit" });

            Insert(new Meal { Name = "Rice", Category = Categories[4], Description = "Rice is a keystone of the grass family that produces a vast number of grains " });
            Insert(new Meal { Name = "Wheat", Category = Categories[4], Description = "Wheat is a type of grass grown all over the world for its highly nutritious and useful grain." });
            Insert(new Meal { Name = "Oats", Category = Categories[4], Description = "They have been in cultivation for over 4,000 years" });
            Insert(new Meal { Name = "Fonio", Category = Categories[4], Description = "one of the world's fastest growing cereals, reaching maturity in as little as six to eight weeks" });
            Insert(new Meal { Name = "Barley", Category = Categories[4], Description = " a source of fermentable material for beer and certain distilled beverages, and as a component of various health foods" });

            var countries = new[]
                {
                    "Elwynn Forest","Stormwind", "Loch Modan", "Redridge Mountains", "Westfall", 
                    "Ironforge", "Orgrimmar","Feralas", "Darnassus", "Teldrassil",
                    "Winterspring", "Goldshire", "Sylvanaar", "StoneCutter", "Farringdon", 
                    "Regent", "Hatton Garden"
                };

            foreach (var country in countries)
            {
                Insert(new Country { Name = country });
            }

            Insert(new Chef { FirstName = "Naked", LastName = "Chef", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Chef", LastName = "Chef", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Athene", LastName = "Broccoli", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Omu", LastName = "Man", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Pepper", LastName = "Tomato", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Deezze", LastName = "Leysen", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Jeea", LastName = "Derveaux", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Phoebe", LastName = "Phoebes", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Sequeiro", LastName = "Olano", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Hercules", LastName = "Oat", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Hermes", LastName = "Graps", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Posh", LastName = "Sicy", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Hestia", LastName = "Cook", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Demeter", LastName = "Harvest", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Hyperion", LastName = "Light", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Gaia", LastName = "Earth", Country = Rnd(Countries) });
            Insert(new Chef { FirstName = "Chronos", LastName = "Timpus", Country = Rnd(Countries) });

            var dinners = new[] {"dinner with friends","eating at the pub","cooking in the garden","ninja dinner",
            "broccoli power","eating out","Awesome dinner","Uber dinner","Fruity dish","Nice dish","Nerds eating","Pros eating",
            "hungry men","snacks and movie","fruit salad","Morning meal","Morning Tea","Cookies and milk"};

            foreach (var o in dinners)
            {
                Insert(new Dinner
                {
                    Country = Rnd(Countries),
                    Chef = Rnd(Chefs),
                    Meals = RndMeals(),
                    Date = RndDate(),
                    Name = o,
                    BonusMealId = Rnd(Meals).Id
                });
            }
        }

        private static readonly Random R = new Random();

        private static T Rnd<T>(ICollection<T> list)
        {
            return list.ToArray()[R.Next(0, list.Count)];
        }

        private static DateTime RndDate()
        {
            return new DateTime(R.Next(2009, 2013), R.Next(1, 12), R.Next(1, 28));
        }

        private static IEnumerable<Meal> RndMeals()
        {
            var list = new List<Meal>();
            var x = R.Next(1, 3);
            for (var i = 0; i < x; i++)
            {
                list.Add(Meals[R.Next(Meals.Count - 1)]);
            }
            return list.Distinct();
        }
    }
}