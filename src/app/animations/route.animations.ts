import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
} from '@angular/animations';

export const modernSlideFadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }),
      ],
      { optional: true }
    ),
    query(':enter', [style({ opacity: 0, transform: 'scale(1.05)' })], {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [
          animate(
            '0.5s ease-out',
            style({ opacity: 0, transform: 'scale(0.95)' })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '0.5s 0.3s ease-out',
            style({ opacity: 1, transform: 'scale(1)' })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
