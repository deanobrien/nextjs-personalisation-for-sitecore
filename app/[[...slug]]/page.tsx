'use server'
import PlaceHolder from '../Components/Core/PlaceHolder';
import { fetchPath } from '@/app/lib/data';

const Page = async({params: {slug}}) => {

  const pathName = await fetchPath(slug)

    return (
			<PlaceHolder placeHolderName="bootstrap-content" pathName={pathName} />
    );
};

export default Page;