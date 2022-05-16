import { GradientText } from '@/components/GradientText';
import { Section } from '@/components/Section';

const CTA = () => (
  <Section>
    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
      <div className="sm:w-7/12">
        <div className="text-3xl font-bold">
          Subscribe to my <GradientText>Newsletters</GradientText>
        </div>

        <p className="mt-3 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vero
          esse non molestias eos excepturi, inventore atque cupiditate.
        </p>
      </div>

      <div className="w-full sm:w-5/12">
        <form className="flex rounded-full bg-slate-800 px-4 py-2 focus-within:ring-2 focus-within:ring-cyan-600 hover:ring-2 hover:ring-cyan-600">
          <input className="w-full appearance-none bg-slate-800 focus:outline-none" />

          <button
            className="ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50"
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </Section>
);

export { CTA };
