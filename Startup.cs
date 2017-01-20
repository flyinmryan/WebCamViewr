using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Weather.Startup))]
namespace Weather
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
