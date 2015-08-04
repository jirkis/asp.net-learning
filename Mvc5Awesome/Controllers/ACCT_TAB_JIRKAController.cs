using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Mvc5Awesome.Models;

namespace Mvc5Awesome.Controllers
{
    public class ACCT_TAB_JIRKAController : Controller
    {
        private TpiiEntities db = new TpiiEntities();

        // GET: ACCT_TAB_JIRKA
        public ActionResult Index()
        {
            return View(db.ACCT_TAB_JIRKA.Take(30).ToList());
        }

        // GET: ACCT_TAB_JIRKA/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ACCT_TAB_JIRKA aCCT_TAB_JIRKA = db.ACCT_TAB_JIRKA.Find(id);
            if (aCCT_TAB_JIRKA == null)
            {
                return HttpNotFound();
            }
            return View(aCCT_TAB_JIRKA);
        }

        // GET: ACCT_TAB_JIRKA/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: ACCT_TAB_JIRKA/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "AACCT,ABAL,AREST,AWDL_START,AWDL_LEN,AWDL_LMT,AWDL_TDY,TRN_DT,POS_START,POS_LEN,POS_LMT,POS_TDY,CURRENCY_TYPE,HOLD_AMOUNT,ACTUAL_BAL,LAST_UPDATE,ACCT_SEGMENT")] ACCT_TAB_JIRKA aCCT_TAB_JIRKA)
        {
            if (ModelState.IsValid)
            {
                db.ACCT_TAB_JIRKA.Add(aCCT_TAB_JIRKA);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(aCCT_TAB_JIRKA);
        }

        // GET: ACCT_TAB_JIRKA/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ACCT_TAB_JIRKA aCCT_TAB_JIRKA = db.ACCT_TAB_JIRKA.Find(id);
            if (aCCT_TAB_JIRKA == null)
            {
                return HttpNotFound();
            }
            return View(aCCT_TAB_JIRKA);
        }

        // POST: ACCT_TAB_JIRKA/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "AACCT,ABAL,AREST,AWDL_START,AWDL_LEN,AWDL_LMT,AWDL_TDY,TRN_DT,POS_START,POS_LEN,POS_LMT,POS_TDY,CURRENCY_TYPE,HOLD_AMOUNT,ACTUAL_BAL,LAST_UPDATE,ACCT_SEGMENT")] ACCT_TAB_JIRKA aCCT_TAB_JIRKA)
        {
            if (ModelState.IsValid)
            {
                db.Entry(aCCT_TAB_JIRKA).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(aCCT_TAB_JIRKA);
        }

        // GET: ACCT_TAB_JIRKA/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            ACCT_TAB_JIRKA aCCT_TAB_JIRKA = db.ACCT_TAB_JIRKA.Find(id);
            if (aCCT_TAB_JIRKA == null)
            {
                return HttpNotFound();
            }
            return View(aCCT_TAB_JIRKA);
        }

        // POST: ACCT_TAB_JIRKA/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            ACCT_TAB_JIRKA aCCT_TAB_JIRKA = db.ACCT_TAB_JIRKA.Find(id);
            db.ACCT_TAB_JIRKA.Remove(aCCT_TAB_JIRKA);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
