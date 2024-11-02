import type { PackageSummary } from '../api/types/packageSummary';
import { Link } from 'react-router-dom'

interface PackageListItemProps {
    pack: PackageSummary
}

const PackageListItem = ({ pack }: PackageListItemProps) => {
    const renderedKeywords = (pack.keywords || []).map((keyword) => {
        return(
            <div key ={keyword} className = 'border py-0.5 px-1 text-xs bg-slate-300 rounded'>
                {keyword}
            </div>
        )
    })

    return(
        <div className="border p-4 rounded flex justify-between items-center hover:bg-slate-50 hover:scale-105 duration-300">
            <div className="flex flex-col gap-2">
                <Link to = {`/packages/${pack.name}`} className = 'text-xl font-bold'>
                {pack.name}
                </Link>
                <p className="text-sm text-gray-500">
                    {pack.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {renderedKeywords}
                </div>
            </div>
            <div className="mr-6">
                <Link to={`/packages/${pack.name}`} className = 'py-2 px-3 rounded border bg-black text-white text-lg hover:text-black hover:bg-white hover:border-black duration-200'>
                View
                </Link>
            </div>
        </div>
    )
}
export default PackageListItem