import React from "react";

const Register = (props) => {
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l shadow-3 center">
            <main className="pa4 black-80">
                <form className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="self-start db fw6 lh-copy f6" htmlFor="name">Name</label>
                            <input className="pa2 br2 bw0 shadow-3 input-reset ba bg-transparent w-100 white" type="text" name="name" id="name"/>
                        </div>
                        <div className="mt3">
                            <label className="self-start db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 br2 bw0 shadow-3 input-reset ba bg-transparent w-100 white" type="email" name="email-address" id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b pa2 br2 bw0 shadow-3 input-reset ba bg-transparent w-100 white" type="password" name="password" id="password"/>
                        </div>
                    </fieldset>
                    <div className="">
                        <input className="b ph3 pv2 br2 input-reset ba bw0 shadow-3 bg-transparent grow pointer f6 dib" type="submit" onClick={props.routeChange} value="Register"/>
                    </div>
                </form>
            </main>
        </article>
    )
}
export default Register;