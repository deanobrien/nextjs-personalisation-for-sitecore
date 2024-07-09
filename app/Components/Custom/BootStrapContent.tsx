import { fetchPageItemFromCached } from '@/app/lib/data';

export default async function BootStrapContent({ pathName, uid }: { pathName: string, uid: string }) {
	const pageItem= await fetchPageItemFromCached(pathName,false,false,false);
	return (
		<div className="rich-text" dangerouslySetInnerHTML={{ __html: pageItem.Fields.content }} />
	);
}
