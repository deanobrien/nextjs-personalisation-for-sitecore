import { Component, PageItem } from '@/app/lib/definitions';

async function getData( pathname: string, componentId:string, includeFields:boolean, includeParents: boolean, includeChildren: boolean, includeSiblings: boolean) {
	if (typeof pathname == 'undefined') {
		pathname = "/"
	}
	if(!pathname){
		pathname = "/"
	}

	let fetchUrl='path='+pathname+'&lang=en&site=website&apiKey=ddd'
	if(includeParents) fetchUrl+='&includeParents=true'
	if(includeChildren) fetchUrl+='&includeChildren=true'
	if(includeSiblings) fetchUrl+='&includeSiblings=true'
	if(!includeFields) fetchUrl+='&includeFields=false'
	if(componentId) fetchUrl+='&componentId='+componentId

	fetchUrl = 'https://your-domain/sitecore/api/layoutservice/get?'+fetchUrl
	console.log(fetchUrl);
	const res = await fetch(fetchUrl, { cache: 'no-cache' })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
export async function getProtectedData( pathname: string, token: string, options: RequestInit = {}) {
console.log('PROTECTED')
	if (typeof pathname == 'undefined') {
		pathname = "/"
	}
	if(!pathname){
		pathname = "/"
	}

	let fetchUrl='path='+pathname+'&lang=en&site=website&apiKey=ddd'

	fetchUrl = 'https://your-domain.northumbria.ac.uk/sitecore/api/layoutservice/secure?'+fetchUrl

console.log('PROTECTED:'+fetchUrl+' BEARER:'+token)
	try {
		const headers = new Headers(options.headers);
	
		if (token) {
		  headers.set("Authorization", `Bearer ${token}`);
		}
		const response = await fetch(fetchUrl, { ...options, headers, "scope": "sitecore.profile" });
	
		if (!response.ok) {
		  throw new Error(`HTTP error! Status: ${response.status}`);
		}
		else{
			console.log('Success: '+response.body)
		}
	
		const data = await response.json();
		console.log('Success: '+JSON.stringify(data))

		return data;
	  } catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	  }
}




export const fetchComponentsForPlaceHolder = async (placeHolderName: string, path: string): Promise<Component[]> => {
	try {
		const data = await getData(path,'',true,true,true,true)
		return data.Route.Components.filter((item: Component) => item.PH.toLowerCase().endsWith(placeHolderName.toLowerCase()))

	} catch (error) {
		throw ('Error on placeholder '+placeHolderName+' :'+error);
	}
}
export const fetchComponentFromCached = async (path: string, uid: string): Promise<Component> => {
	try {

		// Rather than make multiple calls for each component - make one that is cached
		const data = await getData(path,'',true,true,true,true);

        // Then query result
		return data.Route.Components.find((item: Component) => item.UID.endsWith(uid));	} catch (error) {
		throw ('Error on fetchComponent ' + uid + ' :' + error);
	}
};
export const fetchPageItemFromCached = async (path: string, includeParents: boolean, includeChildren: boolean, includeSiblings: boolean): Promise<PageItem> => {
	try {
		const data = await getData(path,'',true,true,true,true);
		if(!includeParents) data.Route.Parents=null;
		if(!includeChildren) data.Route.Children=null;
		if(!includeSiblings) data.Route.Siblings=null;
		data.Route.Components=[]
		return data.Route;
	} catch (error) {
		throw ('Error on fetchPageItem ' + path + ' :' + error);
	}
};
export const fetchPageItemFromProtected = async (path: string, includeParents: boolean, includeChildren: boolean, includeSiblings: boolean, token: string): Promise<PageItem> => {
	console.log('PROTECTED fetchPageItemFromProtected')
	try {
		const data = await getProtectedData(path, token);
		if(!includeParents) data.Route.Parents=null;
		if(!includeChildren) data.Route.Children=null;
		if(!includeSiblings) data.Route.Siblings=null;
		data.Route.Components=[]
		return data.Route;
	} catch (error) {
		throw ('Error on fetchPageItem ' + path + ' :' + error);
	}
};
export const fetchPath = async (slug: any): Promise<string> => {
	try {
		var pathName=''
		if (slug && slug[0]) {
			pathName += '/' + slug[0]
		}
		if (slug && slug[1]) {
			pathName += '/' + slug[1]
		}
		if (slug && slug[2]) {
			pathName += '/' + slug[2]
		}
		if (slug && slug[3]) {
			pathName += '/' + slug[3]
		}
		if (slug && slug[4]) {
			pathName += '/' + slug[4]
		}
		return pathName;
	} catch (error) {
		throw (error);
	}
}

export const getQueryVariable = async(variable: any, queryString: any) : Promise<any> => {
	try {
    var vars = queryString.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
	} catch (error) {
		throw ('Error on getQueryVariable '+variable+' :'+error);
	}
}