import { fetchPageItemFromCached,fetchPageItemFromProtected,fetchComponentFromCached,getQueryVariable } from '@/app/lib/data';
import { auth } from "../../../auth"

export default async function BootStrapJumbotron({ pathName, uid }: { pathName: string, uid: string }) {

const session = await auth()

//const pageItem= await fetchPageItemFromProtected(pathName,true,false,false, session.token);
const pageItem= await fetchPageItemFromCached(pathName,true,false,false);

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

let protectedContent =<></>;

if (session?.user) 
{
	protectedContent =
	<div className="protectedContent"><p> Only people who are signed in should see this content!</p><p>Bearer token: {session.token}</p></div>
}



	return (
<section className="jumbotron text-center">
    <div className="container">
        <p className="display-2"></p>
        <h1 className="jumbotron-heading">{pageItem.Fields.title}</h1>
        <p className="lead text-muted">{pageItem.Fields.leadcontent}</p>
		{protectedContent}
        <p>
	 		{callone} {calltwo} {callthree}
        </p>
    </div>
</section>
	);
}
