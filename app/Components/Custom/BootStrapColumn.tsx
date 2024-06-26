import { getQueryVariable,fetchComponentFromCached} from '@/app/lib/data';
import PlaceHolder from '../Core/PlaceHolder';

export default async function BootStrapColumn({ pathName, uid }: { pathName: string, uid: string }) {
	const component = await fetchComponentFromCached(pathName,uid)
	const colSize = await getQueryVariable("Column Size", component.PAR);
	const size='col-md-'+colSize;
	const placeholderName='BootStrap-Column-'+uid+'-0'
	return (
		<div className={size}>
			<PlaceHolder pathName={pathName} placeHolderName="bootstrap-column" />
			<PlaceHolder pathName={pathName} placeHolderName={placeholderName} />
		</div>
	);
}
