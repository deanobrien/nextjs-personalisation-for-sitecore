import { fetchPageItemFromCached,fetchComponentFromCached,getQueryVariable } from '@/app/lib/data';

export default async function BootStrapJumbotron({ pathName, uid }: { pathName: string, uid: string }) {
	const pageItem= await fetchPageItemFromCached(pathName,true,false,false);
console.log('pageitem:'+JSON.stringify(pageItem));
let callone = <></>;
let calltwo = <></>;
let callthree = <></>;
if(pageItem.Fields.calltoactionone)
{
	callone=<a href={pageItem.Fields.calltoactionone.Fields.Url.replace("en/", '')} className="btn btn-primary my-2">{pageItem.Fields.calltoactionone.Fields.Text}</a>
}
if(pageItem.Fields.calltoactiontwo)
{
	calltwo= <a href={pageItem.Fields.calltoactiontwo.Fields.Url.replace("en/", '')} className="btn btn-success my-2">{pageItem.Fields.calltoactiontwo.Fields.Text}</a>
}
if(pageItem.Fields.calltoactionthree)
{
    callthree = <a href={pageItem.Fields.calltoactionthree.Fields.Url.replace("en/", '')} className="btn btn-danger my-2">{pageItem.Fields.calltoactionthree.Fields.Text}</a>
}

	return (
<section className="jumbotron text-center">
    <div className="container">
        <p className="display-2"></p>
        <h1 className="jumbotron-heading">{pageItem.Fields.title}</h1>
        <p className="lead text-muted">{pageItem.Fields.leadcontent}</p>
        <p>
	 		{callone} {calltwo} {callthree}
        </p>
    </div>
</section>
	);
}
