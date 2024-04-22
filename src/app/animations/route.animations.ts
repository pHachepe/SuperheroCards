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
