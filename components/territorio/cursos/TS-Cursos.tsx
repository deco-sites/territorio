import TsCursoCard from 'deco-sites/territorio/components/territorio/cursos/TS-Curso-Card.tsx';
import { AppContext } from '../../../apps/site.ts';
import Icon from '../../../components/ui/Icon.tsx';
import { useTsCarrousel } from '../../../hooks/useTsCarrousel.tsx';
import type { Course } from './TS-Curso-Card.tsx';

export interface CursosProps {
  courses: Course[];
}

const MAX_DISPLAYED_ITEMS = 4;

const TsCursos = ({ courses }: CursosProps) => {
  const { visibleItems, onNext, onPrevious } = useTsCarrousel({
    items: courses,
    visibleItemsCountParam: MAX_DISPLAYED_ITEMS,
  });

  const firstCourse = courses[0];
  const lastCourse = courses[courses.length - 1];
  const courseOnTheLeft = visibleItems[0];
  const courseOnTheRight = visibleItems[MAX_DISPLAYED_ITEMS - 1];

  return (
    <div class='flex justify-center items-center mt-[-150px] relative z-50'>
      <button
        class='mr-2'
        onClick={onPrevious}
        disabled={firstCourse.id === courseOnTheLeft.id}
      >
        <Icon
          class='text-accent-content'
          size={96}
          id='ChevronLeft'
          strokeWidth={1}
        />
      </button>
      <div class='flex gap-x-7'>
        {visibleItems.map((course) => (
          <TsCursoCard course={course} />
        ))}
      </div>
      <button
        class='ml-2'
        onClick={onNext}
        disabled={lastCourse.id === courseOnTheRight.id}
      >
        <Icon
          class='text-accent-content'
          size={96}
          id='ChevronRight'
          strokeWidth={1}
        />
      </button>
    </div>
  );
};

export const loader = (props: CursosProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsCursos;
