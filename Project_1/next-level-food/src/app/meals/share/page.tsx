"use client";

import { useActionState } from "react";

import { shareMeal } from "@/lib/action";
import ImagePicker from "@/src/components/meals/ImagePicker";
import MealsFormSubmit from "@/src/components/meals-form-submit/MealsFormSubmit";
import { IFormState } from "@/src/data-types/interfaces/formState";

export default function ShareMealPage(): React.ReactNode {
  const [state, formAction] = useActionState<IFormState, FormData>(
    async (_prevState: IFormState, formData: FormData): Promise<IFormState> =>
      shareMeal(formData),
    { message: null } as IFormState
  );

  return (
    <>
      <header className="share-header">
        <h1>
          Share your <span className="share-highlight">favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className="share-main">
        <form className="share-form" action={formAction}>
          <div className="share-row">
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label={"Your image"} name="image" />
          {state.message && <p>{state.message}</p>}
          <p className="share-actions">
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
