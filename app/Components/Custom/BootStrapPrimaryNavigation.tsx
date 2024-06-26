export default async function BootStrapPrimaryNavigation({ pathName, uid }: { pathName: string, uid: string }) {
	return (
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<a className="navbar-brand" href="#">Personalisation Demo</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarsExampleDefault">
				<ul className="navbar-nav mr-auto">


				</ul>
			</div>
		</nav>
	);
}
