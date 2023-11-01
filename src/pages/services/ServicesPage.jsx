import Breadcrumb from '../breadcrumb/Breadcrumb';
import Services from '../home/Services';

const ServicesPage = () => {
    return (
        <>
            <Breadcrumb routeText="Services" routeLink="/services"></Breadcrumb>
            <Services></Services>
        </>
    );
};

export default ServicesPage;

