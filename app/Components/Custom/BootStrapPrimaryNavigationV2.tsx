export default async function BootStrapPrimaryNavigationV2({ pathName, uid }: { pathName: string, uid: string }) {
	return (
		<header>
			<div className="bg-dark collapse" id="navbarHeader" >
				<div className="container">
					<div className="row">
						<div className="col-sm-8 col-md-7 py-4">
							<h4 className="text-white">Personalisation Demo</h4>
						</div>
						<div className="col-sm-4 offset-md-1 py-4">
							<h4 className="text-white">Menu</h4>
							<ul className="list-unstyled">

							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="navbar navbar-dark bg-dark box-shadow">
				<div className="container d-flex justify-content-between">
					<a href="#" className="navbar-brand d-flex align-items-center">
						<img src="https://personalisesc.dev.local/-/media/Personalisation/logo.png" style={{"height": "80px"}} />
						<strong>Personalisation Demo</strong>
					</a>
					<button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
			</div>
		</header>
	);
}
