import Principal from "./Principal";

export const Body = () => {

    const name = localStorage.getItem('data');
    return (
        <>
            <Principal />
            <br /><br /><br />
            <div class="container">
                <div class="card-body p-5">
                    <div class="row gx-4 align-items-center justify-content-between">
                        <div class="col">
                            <h2 class="text-primary">Bienvenido {name}!</h2>
                            <p class="text-gray-700">Great job, your affiliate dashboard is ready to go! You can view sales, generate links, prepare coupons, and download affiliate reports using this dashboard.</p>
                            <a href="#" class="btn btn-primary p-3">Get Started<i class="feather feather-arrow-right ms-1"></i></a>
                        </div>
                        <div class="col mt-4">
                            <img src="https://sb-admin-pro-angular.startbootstrap.com/assets/img/illustrations/statistics.svg" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Body;