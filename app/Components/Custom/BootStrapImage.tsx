import { fetchPageItemFromCached } from '@/app/lib/data';


export default async function BootStrapImage({ pathName, uid }: { pathName: string, uid: string }) {
	const pageItem= await fetchPageItemFromCached(pathName,true,false,false);
	const imageUrl='https://personalisesc.dev.local/'+pageItem.Fields.mainimage.Fields.Url
	return (
		<img src={imageUrl}/>
	);
}
