import { useLoaderData, Link } from 'react-router-dom'
import type { HomeLoaderResult } from './homeLoader';

const HomePage = () => {
    const { featuredPackages } = useLoaderData() as HomeLoaderResult;

   const renderedPackages = featuredPackages.map((pack) => {
    return <div  key = {pack.name}className="flex flex-col justify-between gap-3 border rounded shadow p-4">
        <div className="flex flex-col gap-1 border-bottom border-gray-400">
            <div className="font-bold text-center">{pack.name}</div>
            <div className="text-sm text-gray-500">{pack.description}</div>
            <div className="text-sm text-gray-500">{pack.maintainers.length} maintainers</div>
        </div>
        <Link to ={`/packages/${pack.name}`} className ='border rounded border-gray-900 text-center'>
          View
        </Link>
    </div>
   })
    return(
        <div className="container py-12 space-y-8">
            <div className="space-y-6 text-center">
                <h1 className="text-6xl font-bold">
                    The NPM Registry
                </h1>
                <p className = 'text-gray-500 className="mx-auto max-w-[600px]text-gray-500'>
                    The place to search and view npm packages.
                    </p>
            </div>
            <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
                {renderedPackages}
            </div>
        </div>
    )
}

export default HomePage;