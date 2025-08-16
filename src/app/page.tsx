import ComplexForm from "@/app/features/complex-form/components/ComplexForm";

export default function Home() {
  return (
    <div className="max-w-3xl m-auto px-4">
      <h1 className="font-bold text-2xl pb-8">
        Complex forms with nextjs and react hook forms
      </h1>
      <ComplexForm />
    </div>
  );
}
