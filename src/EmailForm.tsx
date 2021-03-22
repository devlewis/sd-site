import { useForm } from "react-hook-form";

type FormData = {
    firstName: string;
    lastName: string;
    email: string;
};

export default function EmailForm() {
    const { register, setValue, handleSubmit, errors } = useForm<FormData>();
    const onSubmit = handleSubmit(({ email }) => {
        console.log(email);
    });

    return (
        <div className={"Form"}>
            <p>Join our Mailing List!</p>
            <form className={"Form"} onSubmit={onSubmit}>
                <label className={"Input"}>Email Address</label>
                <input className={"Input"} name="email" ref={register} />
                <button
                    className={"Button"}
                    type="submit"
                >
                    Submit
      </button>
            </form>
        </div>
    );
}