using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace AngularData.Controllers
{
    public class EventsController : ApiController
    {
        private static JToken GetSingleJsonFile(string id)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            return JObject.Parse(System.IO.File.ReadAllText(path + "../app/data/event/" + id + ".json"));
        }

        public void Post(string id, JObject eventData)
        {
            var path = System.Web.Hosting.HostingEnvironment.MapPath("/");
            System.IO.File.WriteAllText(path + "../app/data/event/" + id + ".json", eventData.ToString(Formatting.None));
        }
    }
}