import BootStrapAlbum from '../Custom/BootStrapAlbum';
import BootStrapColourDemo from '../Custom/BootStrapColourDemo';
import BootStrapColumn from '../Custom/BootStrapColumn';
import BootStrapContent from '../Custom/BootStrapContent';
import BootStrapImage from '../Custom/BootStrapImage';
import BootStrapJumbotron from '../Custom/BootStrapJumbotron';
import BootStrapLeadContent from '../Custom/BootStrapLeadContent';
import BootStrapPageHeading from '../Custom/BootStrapPageHeading';
import BootStrapPrimaryNavigation from '../Custom/BootStrapPrimaryNavigation';
import BootStrapPrimaryNavigationV2 from '../Custom/BootStrapPrimaryNavigationV2';
import BootStrapRow from '../Custom/BootStrapRow';
import { fetchComponentFromCached } from '@/app/lib/data';

export default async function DynamicComponent({ pathName, uid, componentName }: { pathName:string, uid: string, componentName: string }) {
  const component =  await fetchComponentFromCached(pathName,uid)

  if(componentName==='BootStrapAlbum')
  {
	  return (<BootStrapAlbum pathName={pathName} uid={uid} /> );
  }
  else if (componentName === 'BootStrapColourDemo') 
  {
	  return ( <BootStrapColourDemo pathName={pathName} uid={uid} component={component} />);
  }
  else if(componentName==='BootStrapColumn')
  {
	  return (<BootStrapColumn pathName={pathName} uid={uid} /> );	    
  }
  else if(componentName==='BootStrapContent')
  {
	  return ( <BootStrapContent pathName={pathName} uid={uid} /> );	    
  }
  else if(componentName==='BootStrapImage')
  {
	  return ( <BootStrapImage pathName={pathName} uid={uid} /> );	    
  }
  else if (componentName ==='BootStrapJumbotron')
  {
	  return (<BootStrapJumbotron pathName={pathName} uid={uid} /> );	    
  }
  else if (componentName ==='BootStrapLeadContent')
  {
	  return (<BootStrapLeadContent pathName={pathName} uid={uid} /> );	    
  }
  else if(componentName==='BootStrapPageHeading')
  {
	  return (<BootStrapPageHeading pathName="/" uid={uid} /> );	    
  }
  else if(componentName==='BootStrapPrimaryNavigation')
  {
	  return (<BootStrapPrimaryNavigation pathName={pathName} uid={uid} /> );	    
  }
  else if(componentName==='BootStrapPrimaryNavigationV2')
  {
	  return (<BootStrapPrimaryNavigationV2 pathName={pathName} uid={uid} /> );	    
  }
  else if (componentName === 'BootStrapRow') {
	  return (<BootStrapRow pathName={pathName} uid={uid}  />);
  }
}
