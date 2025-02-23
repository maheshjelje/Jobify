import Job from './Job';
import Wrapper from '../assets/wrappers/JoContainer';
import { useAllJobsContext } from '../pages/AllJobs';
import PageBtn from './pageBtn'

const JobsContainer = () => {

    const { data } = useAllJobsContext();

    const { jobs, totalJobs, numOfPages } = data;
    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <h5>
                {totalJobs} job{jobs.length > 1 && 's'} found
            </h5>
            <div className='jobs'>
                {jobs.map((job) => {
                    return <Job key={job._id} {...job} />;
                })}
            </div>
            {numOfPages > 1 && <PageBtn />}
        </Wrapper>
    );
}

export default JobsContainer;