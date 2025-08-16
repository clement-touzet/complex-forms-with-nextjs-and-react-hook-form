import Section from "@/app/components/layouts/Section";
import ComplexForm from "@/app/features/complex-form/components/ComplexForm";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Section>
        <h1>Complex forms with nextjs and react hook forms</h1>
        <ComplexForm />
      </Section>
    </div>
  );
}
