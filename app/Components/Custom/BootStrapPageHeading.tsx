import { fetchPageItemFromCached } from '@/app/lib/data';

export default async function BootStrapPageHeading({ pathName, uid }: { pathName: string, uid: string }) {
	const pageItem= await fetchPageItemFromCached(pathName,true,false,false)
	
	return (
		<h1>{pageItem.Fields.title}</h1>
	);
}
