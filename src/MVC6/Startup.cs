using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.Framework.DependencyInjection;
using Microsoft.Framework.Logging;

namespace MVC6
{
    public class Startup
    {
        //public IConfiguration Configuration { get; set; }
        //public Startup(IHostingEnvironment env, IApplicationEnvironment appEnv)
        //{
        //    // Setup configuration sources.
        //    var builder = new ConfigurationBuilder(appEnv.ApplicationBasePath)
        //        .AddJsonFile("config.json")
        //        .AddEnvironmentVariables();
        //    Configuration = builder.Build();
        //}

        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            app.UseStaticFiles();

            app.UseMvc(config =>
            {
                config.MapRoute(
                  name: "Default",
                  template: "{controller}/{action}/{id?}",
                  defaults: new { controller = "Home", action = "Index" }
                  );
            });
        }
    }
}
