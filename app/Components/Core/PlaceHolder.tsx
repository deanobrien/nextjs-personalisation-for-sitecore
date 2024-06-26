import { fetchComponentsForPlaceHolder} from '@/app/lib/data';
import DynamicComponent from './DynamicComponent';

const PlaceHolder = async ({ placeHolderName, pathName }: { placeHolderName: string, pathName: string }) => {

	if (pathName != "/_next/static/css/app/styles.css.map" && !pathName.includes("/js/") && !pathName.includes("/css/") && !pathName.includes("/img/")) {

		const components = await fetchComponentsForPlaceHolder(placeHolderName, pathName);
		return (
			<>
				{components.map((c) => {
					return (
						<>
							<DynamicComponent pathName={pathName} uid={c.UID} componentName={c.ComponentName} key={c.UID} />
						</>
					);
				})}
			</>
		);
	};
}
export default PlaceHolder;