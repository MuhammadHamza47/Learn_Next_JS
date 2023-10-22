const { default: ServicesFooter } = require("../(components)/servicesFooter/servicesFooter");

function ServicesLayout({children}){
    return(
        <div>
        {children}
        <ServicesFooter/>
        </div>
    )
}
export default ServicesLayout;