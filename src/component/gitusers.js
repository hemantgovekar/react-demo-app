import React from 'react'
import { useFetch } from '../service/getUsers'
const Gitusers = () => {
    let styles = { width: '120px', height: '120px' };
    let wrapper = { position: 'relative' }


    console.log('in git user');
    const [data, loading] = useFetch("https://randomuser.me/api/?results=2");
    return (
        <div>
            {
                loading ? ("Loading...") :
                    (
                        <div>
                            {
                                data.results.map((user => (
                                    <div style={wrapper}>
                                        <p key={user.login.uuid}>
                                            {
                                                <div>
                                                    <div>{user.name.title}. {user.name.first} {user.name.last}</div>
                                                    <div><img src={user.picture.medium}></img></div>
                                                    <div> Phone - {user.phone}  <br/>Cell - {user.cell} </div>

                                                </div>
                                            }
                                        </p>
                                    </div>
                                )))
                            }
                        </div>
                    )
            }
        </div>
    )
}
export default Gitusers