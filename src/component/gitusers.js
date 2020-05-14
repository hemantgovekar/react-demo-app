import React from 'react'
import { useFetch } from '../service/getUsers'
const Gitusers = () => {
    let styles = { width: '120px', height: '120px' };
    let wrapper = { position: 'relative' }

    const [data, loading] = useFetch("https://api.github.com/users");
    console.log(data);
    return (
        <div>
            {
                loading ? ("Loading...") :
                    (
                        <div>
                            {
                                data.map(({ id, avatar_url, url, login, repos_url, type }) => (
                                    <div style={wrapper}>
                                        <p key={`photo-${id}`}>
                                            {
                                                <img style={styles} alt={avatar_url} src={avatar_url} />
                                            }
                                        </p>
                                    </div>
                                ))}
                        </div>
                    )
            }
        </div>
    )
}
export default Gitusers