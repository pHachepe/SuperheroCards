import {
  trigger,
  transition,
  style,
  query,
  animate,
  group,
} from '@angular/animations';

export const slideFadeAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
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
    query(':enter', [style({ opacity: 0, transform: 'translateX(100%)' })], {
      optional: true,
    }),
    group([
      query(
        ':leave',
        [
          animate(
            '700ms ease-out',
            style({ opacity: 0, transform: 'translateX(-100%)' })
          ),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '700ms ease-out',
            style({ opacity: 1, transform: 'translateX(0)' })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
