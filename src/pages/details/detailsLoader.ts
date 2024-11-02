import type { Params } from 'react-router-dom';
import type { PackageDetails } from '../../api/types/packagesDetails';
import { getPackage } from '../../api/queries/getPackages';

interface LoaderArgs {
  params: 
  Params
}

export interface DetailsLoaderResult {
  details : PackageDetails
}

export async function detailsLoader({ params }: LoaderArgs): Promise<DetailsLoaderResult> {
  const { name } = params

  if(!name){
    throw new Error('Name required.')
  }
  const details = await getPackage(name)

  return {
    details
  }
}