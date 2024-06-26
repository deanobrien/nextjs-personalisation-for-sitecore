export default async function NavItem({ obj, enableLinks, isLandscape, }: { obj:any, enableLinks: boolean, isLandscape:boolean }) {
    let hasImage=false;
    let url='';
    let imageUrl='';
    let colSpan='3';
    if(enableLinks)
    {
        url=obj.Path;
    }
    if(obj.navigationimage)
    {
        imageUrl='https://personalisesc.dev.local/'+obj.navigationimage.Fields.Url;
        hasImage=true;
    }
    let colString='col-md-'+colSpan;

    let card = <></>;
    let navigationTitle = <></>;
    let viewLink = <></>;
    let portraitViewLink = <></>;
    if(enableLinks)
    {
        navigationTitle=<a className="text-dark" href={url}>{obj.navigationtitle}</a>;
        viewLink=<a href={url}>View</a>;
        portraitViewLink=
        <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
            <a role="button" className="btn btn-sm btn-outline-secondary" href={url}>View</a>
        </div>
    </div>
    }
    else
    {
        navigationTitle=<span>{obj.navigationtitle}</span>;
    }
    if(isLandscape)
    {
        card=
        
        <div className="card flex-md-row mb-3 box-shadow h-md-250">
			<img className="card-img-right flex-auto d-none d-md-block" alt={obj.navigationTitle}  style={{ 'height': '200px','width': '200px','padding': '50px 10px', }} src={imageUrl} data-holder-rendered="true" />
            <div className="card-body d-flex flex-column align-items-start">
                <h3 className="mb-0">
                    {navigationTitle}
                </h3>
                <p className="card-text mb-auto">{obj.description}</p>
                {viewLink}
            </div>
		</div>
        
    }
    else
    {
        card=
        <div className="card mb-4 box-shadow">
            <img class="card-img-top" alt="@navItem.NavigationTitle" src={imageUrl} style={{ 'height': '150px','width': '100%','display': 'block', }} />
            <div className="card-body">
                <h3 className="mb-0">
                    {navigationTitle}
                </h3>
                <p className="card-text">{obj.description}</p>
                {portraitViewLink}
        </div>
    </div>
    }

	return (
		<div className={colString}>
			{card}
		</div>
	);
}				