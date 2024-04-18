import type { MediaQueryKey } from 'deco-sites/territorio/hooks/useTsMediaQuery.tsx';
import useTsMediaQuery from 'deco-sites/territorio/hooks/useTsMediaQuery.tsx';
import { AppContext } from '../../../apps/site.ts';
import Icon from '../../../components/ui/Icon.tsx';
import { useTsCarrousel } from '../../../hooks/useTsCarrousel.tsx';
import type { Course } from './TS-CursoCard.tsx';
import TsCursoCard from './TS-CursoCard.tsx';

export interface CursosProps {
  courses: Course[];
}

const DISPLAYED_ITEMS: Record<MediaQueryKey, number> = {
  sm: 2,
  md: 2,
  lg: 2,
  xl: 3,
  '2xl': 4,
};

const TsCursos = ({ courses }: CursosProps) => {
  const { currentMediaQuery } = useTsMediaQuery();

  const { visibleItems, onNext, onPrevious, hasPrevious } = useTsCarrousel({
    items: courses,
    visibleItemsCountParam: DISPLAYED_ITEMS,
  });

  const isMobile = currentMediaQuery === 'sm';
  const lastCourse = courses[courses.length - 1];
  const courseOnTheRight = visibleItems[DISPLAYED_ITEMS[currentMediaQuery] - 1];

  return (
    <div
      id='cursos'
      class='flex sm:justify-center items-center mt-[-150px] relative z-30 py-10 overflow-x-hidden sm:overflow-x-auto select-none'
    >
      <button
        class='mx-2 h-[calc(100%-80px)]'
        onClick={onPrevious}
        disabled={!hasPrevious}
      >
        <Icon
          class='text-accent-content'
          size={isMobile ? 36 : 96}
          id='ChevronLeft'
          strokeWidth={isMobile ? 5 : 1}
        />
      </button>
      <div class='flex gap-x-3 sm:gap-x-7'>
        {visibleItems.map((course) => (
          <TsCursoCard course={course} isMobile={isMobile} />
        ))}
      </div>
      <button
        class='mx-2 h-[calc(100%-80px)]'
        onClick={onNext}
        disabled={lastCourse.name === courseOnTheRight.name}
      >
        <Icon
          class='text-accent-content'
          size={isMobile ? 36 : 96}
          id='ChevronRight'
          strokeWidth={isMobile ? 5 : 1}
        />
      </button>
    </div>
  );
};

export const loader = (props: CursosProps, _req: Request, ctx: AppContext) => {
  return { ...props, device: ctx.device };
};

export default TsCursos;
