import PlaceHolder from '../Core/PlaceHolder';
export default async function BootStrapRow({ pathName, uid }: { pathName: string, uid: string }) {
	const placeholderName='BootStrap-Row-'+uid+'-0'
	return (
		<div className="row">
			<PlaceHolder pathName={pathName} placeHolderName={placeholderName} />
		</div>
	);
}

