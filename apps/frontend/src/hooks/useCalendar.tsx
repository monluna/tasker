import { create } from 'zustand';

import {
  startOfToday,
  format,
  parse,
  eachDayOfInterval,
  endOfMonth,
  add,
  startOfWeek,
  endOfWeek,
} from 'date-fns';

interface CalendarState {
  today: Date;
  week: Date[];
  firstDayOfWeek: Date;
  getPreviousWeek: () => void;
  getNextWeek: () => void;
  month: Date[];
  firstDayOfMonth: Date;
  getPreviousMonth: () => void;
  getNextMonth: () => void;
  activeDay: Date;
  getPreviousDay: () => void;
  getNextDay: () => void;
  setActiveDay: (day: Date) => void;
  setActiveWeek: (day: Date) => void;
}

const today = startOfToday();

const calcualteNextWeek = (
  firstDayOfWeek: Date,
  increment: boolean
): Date[] => {
  const firstDayOfPrevWeek = add(firstDayOfWeek, { weeks: increment ? 1 : -1 });
  return eachDayOfInterval({
    start: firstDayOfPrevWeek,
    end: endOfWeek(firstDayOfPrevWeek, { weekStartsOn: 1 }),
  });
};

const calcualteNextMonth = (
  firstDayOfMonth: Date,
  increment: boolean
): { nextMonth: Date[]; firstDayOfNextMonth: Date } => {
  const firstDayOfNextMonth = add(firstDayOfMonth, {
    months: increment ? 1 : -1,
  });
  return {
    nextMonth: eachDayOfInterval({
      start: startOfWeek(firstDayOfNextMonth, { weekStartsOn: 1 }),
      end: endOfWeek(endOfMonth(firstDayOfNextMonth), { weekStartsOn: 1 }),
    }),
    firstDayOfNextMonth,
  };
};

export const useCalendar = create<CalendarState>()((set) => ({
  today: startOfToday(),

  firstDayOfWeek: (() => {
    const currWeek = format(today, 'MMM-dd-yyyy');
    const DayWeek = parse(currWeek, 'MMM-dd-yyyy', new Date());
    return startOfWeek(DayWeek, { weekStartsOn: 1 });
  })(),

  week: (() => {
    const firstDayOfWeek = startOfWeek(today, { weekStartsOn: 1 });
    const daysInWeek = eachDayOfInterval({
      start: firstDayOfWeek,
      end: endOfWeek(firstDayOfWeek, { weekStartsOn: 1 }),
    });
    return daysInWeek;
  })(),

  getPreviousWeek: () => {
    return set((state) => {
      const prevWeek = calcualteNextWeek(state.firstDayOfWeek, false);
      return {
        ...state,
        week: prevWeek,
        firstDayOfWeek: prevWeek[0],
      };
    });
  },

  getNextWeek: () => {
    return set((state) => {
      const nextWeek = calcualteNextWeek(state.firstDayOfWeek, true);
      return {
        ...state,
        week: nextWeek,
        firstDayOfWeek: nextWeek[0],
      };
    });
  },

  firstDayOfMonth: (() => {
    const currMonth = format(today, 'MMM-yyyy');
    const startOfMonth = parse(currMonth, 'MMM-yyyy', new Date());
    return startOfMonth;
  })(),

  month: (() => {
    const currMonth = format(today, 'MMM-yyyy');
    const firstDayOfMonth = parse(currMonth, 'MMM-yyyy', new Date());
    const daysInMonth = eachDayOfInterval({
      start: startOfWeek(firstDayOfMonth, { weekStartsOn: 1 }),
      end: endOfWeek(endOfMonth(firstDayOfMonth), { weekStartsOn: 1 }),
    });
    return daysInMonth;
  })(),

  getPreviousMonth: () => {
    return set((state) => {
      const { nextMonth, firstDayOfNextMonth } = calcualteNextMonth(
        state.firstDayOfMonth,
        false
      );
      return {
        ...state,
        month: nextMonth,
        firstDayOfMonth: firstDayOfNextMonth,
      };
    });
  },

  getNextMonth: () => {
    return set((state) => {
      const { nextMonth, firstDayOfNextMonth } = calcualteNextMonth(
        state.firstDayOfMonth,
        true
      );
      return {
        ...state,
        month: nextMonth,
        firstDayOfMonth: firstDayOfNextMonth,
      };
    });
  },

  activeDay: startOfToday(),

  setActiveDay: (day: Date) => {
    return set((state) => {
      return {
        ...state,
        activeDay: day,
      };
    });
  },

  getPreviousDay: () => {
    return set((state) => {
      const previousDay = add(state.activeDay, { days: -1 });
      return {
        ...state,
        activeDay: previousDay,
      };
    });
  },

  getNextDay: () => {
    return set((state) => {
      const nextDay = add(state.activeDay, { days: 1 });
      return {
        ...state,
        activeDay: nextDay,
      };
    });
  },

  setActiveWeek: (day: Date) => {
    return set((state) => {
      const firstDayOfWeek = startOfWeek(day, { weekStartsOn: 1 });
      const daysInWeek = eachDayOfInterval({
        start: firstDayOfWeek,
        end: endOfWeek(firstDayOfWeek, { weekStartsOn: 1 }),
      });
      return {
        ...state,
        week: daysInWeek,
        firstDayOfWeek: firstDayOfWeek,
      };
    });
  },
}));
