import { fetchPageItemFromCached,fetchComponentFromCached,getQueryVariable } from '@/app/lib/data';
import NavItem from '../Custom/NavItem';
export default async function BootStrapAlbum({ pathName, uid }: { pathName: string, uid: string }) {
	const pageItem= await fetchPageItemFromCached(pathName,true,false,false);
	const component = await fetchComponentFromCached(pathName,uid);
	const enableLinks = await getQueryVariable("Enable Links", component.PAR);
	let isLandscape = false;
	const landscape=await getQueryVariable("Landscape", component.PAR)
	if(landscape===null)
	{
		isLandscape =landscape
	}

	return (
		<div className="album py-5">
			<div className="container">
				<div className="row">
				{
					pageItem.Fields.navigationitems.TreeListFields.map(
						(obj) => (
							  <>
                              <NavItem obj={obj} enableLinks={enableLinks} isLandscape={isLandscape} />
							  </>
                        )
					)
				}
				</div>
			</div>
		</div>
	);
}
