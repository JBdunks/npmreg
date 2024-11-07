import type { DetailsLoaderResult } from './detailsLoader';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const { details } = useLoaderData() as DetailsLoaderResult
    return(
        <div className="space-y-4">
            <h1 className="text-3xl font-bold my-4">
                {details.name}
            </h1>
            <div>
                <h3 className="d-text">Description</h3>
                <div className = 'd-bar'>{details.description}</div>
            </div>

            <div>
                <h3 className="d-text">License</h3>
                <div className = 'd-bar'>{details.license}</div>
            </div>

            <div>
                <h3 className="d-text">Author</h3>
                <div className = 'd-bar'>{details.author ? details.author.name : 'No author listed'}</div>
            </div>
            
        </div>
    )
}

export default DetailsPage;