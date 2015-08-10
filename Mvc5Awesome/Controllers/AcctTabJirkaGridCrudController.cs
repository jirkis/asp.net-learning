using System;
using System.Linq;
using System.Web.Mvc;

using Mvc5Awesome.Models;
using Mvc5Awesome.ViewModels.Input;

using Omu.AwesomeMvc;
using System.Data.Entity;

namespace Mvc5Awesome.Controllers
{
    public class AcctTabJirkaGridCrudController : Controller
    {
        private TpiiEntities db = new TpiiEntities();

        private static object MapToGridModel(ACCT_TAB_JIRKA o)
        {
            return
                new
                {
                    o.ABAL,
                    o.AACCT,
                    o.AWDL_START
                };
        }

        public ActionResult GridGetItems(GridParams g, string search)
        {
            search = (search ?? "").ToLower();
            var items = db.ACCT_TAB_JIRKA.Where(o => o.AACCT.ToLower().Contains(search)).AsQueryable();

            return Json(new GridModelBuilder<ACCT_TAB_JIRKA>(items, g)
            {
                Key = "AACCT", // needed for api select, update, tree, nesting, EF
                GetItem = () => db.ACCT_TAB_JIRKA.Single(o => o.AACCT == g.Key),// Get<ACCT_TAB_JIRKA>(Convert.ToInt32(g.Key)), // called by the grid.api.update ( edit popupform success js func )
                Map = MapToGridModel
            }.Build());
        }

        public ActionResult Create()
        {
            return PartialView();
        }

        [HttpPost]
        public ActionResult Create(AcctTabJirkaInput input)
        {
            if (!ModelState.IsValid) return PartialView(input);

            var acctTabJirka = new ACCT_TAB_JIRKA
            {
                ABAL = input.ABAL,
                AACCT = input.AACCT,
                AWDL_START = input.AWDL_START
            };
            db.ACCT_TAB_JIRKA.Add(acctTabJirka);
            db.SaveChanges();

            return Json(MapToGridModel(acctTabJirka)); // returning grid model, used in grid.api.renderRow
        }

        public ActionResult Edit(string AACCT)
        {
            var acctTabJirka = db.ACCT_TAB_JIRKA.Find(AACCT);

            var input = new AcctTabJirkaInput
            {
                AACCT = acctTabJirka.AACCT,
                ABAL = acctTabJirka.ABAL,
                AWDL_START = acctTabJirka.AWDL_START
            };

            return PartialView("Create", input);
        }

        [HttpPost]
        public ActionResult Edit(AcctTabJirkaInput input)
        {
            if (!ModelState.IsValid) return PartialView("Create", input);
            var acctTabJirka = db.ACCT_TAB_JIRKA.Find(input.AACCT);

            acctTabJirka.AACCT = input.AACCT;
            acctTabJirka.ABAL = input.ABAL;
            acctTabJirka.AWDL_START = input.AWDL_START;
            db.SaveChanges();

            // returning the key to call grid.api.update
            return Json(new { acctTabJirka.AACCT });
        }

        public ActionResult Delete(string AACCT, string gridId)
        {
            var acctTabJirka = db.ACCT_TAB_JIRKA.Find(AACCT);

            return PartialView(new DeleteAcctTabJirkaConfirmInput
            {
                AACCT = AACCT,
                GridId = gridId,
                Message = string.Format("Are you sure you want to delete ACCT_TAB_JIRKA <b>{0}</b> ?", acctTabJirka.AACCT)
            });
        }

        [HttpPost]
        public ActionResult Delete(DeleteAcctTabJirkaConfirmInput input)
        {
            var acctTabJirka = new ACCT_TAB_JIRKA { AACCT = input.AACCT };            
            db.Entry(acctTabJirka).State = EntityState.Deleted;
            db.SaveChanges();
            return Json(new { input.AACCT });
        }
    }
}