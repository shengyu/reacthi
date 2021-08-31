import React from 'react'
import member from './Member.module.css'
export default class Member extends React.Component {
    state = {
        members: [
            { id: 1, name: 'Tom', age: 18 },
            { id: 2, name: 'Sam', age: 19 },
        ]
    }

    add = () => {
        const { members } = this.state
        const m = { id: members.length + 1, name: 'Jim', age: 20 }
        this.setState({members: [m, ...members]})
    }

    render() {
        return (
            <div>
                <h2 className={member.info}>Memeber Info</h2>
                <button onClick={this.add}>Add member</button>
                <ul>
                    {
                        this.state.members.map((m) => {
                            return <li key={m.id}>{m.name} - {m.age}</li>
                        })
                    }
                </ul>
            </div>
        )

    }

}