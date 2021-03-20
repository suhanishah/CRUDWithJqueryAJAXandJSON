using CRUDWithJqueryAJAXandJSON.Models;
using System.Linq;
using System.Web.Mvc;

namespace CRUDWithJqueryAJAXandJSON.Controllers
{
    public class EmployeeController : Controller
    {
        EmployeeDBContext db = new EmployeeDBContext();

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult EmployeeList()
        {
            var employees = db.Employees.ToList();
            return Json(employees, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Add(Employee employee)
        {
            db.Employees.Add(employee);
            db.SaveChanges();

            return Json(JsonRequestBehavior.AllowGet);
        }

        public JsonResult GetById(int id)
        {
            var employee = db.Employees.Where(x => x.EmployeeId == id).SingleOrDefault();

            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Update(Employee employee)
        {
            var employeeInDb = db.Employees.Where(x => x.EmployeeId == employee.EmployeeId).SingleOrDefault();

            employeeInDb.Name = employee.Name;
            employeeInDb.Age = employee.Age;
            employeeInDb.State = employee.State;
            employeeInDb.Country = employee.Country;

            db.SaveChanges();

            return Json(employee, JsonRequestBehavior.AllowGet);
        }

        public JsonResult Delete(int id)
        {
            var employee = db.Employees.Where(x => x.EmployeeId == id).SingleOrDefault();

            db.Employees.Remove(employee);
            db.SaveChanges();

            return Json(employee, JsonRequestBehavior.AllowGet);
        }
    }
}