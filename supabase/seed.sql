insert into drops (title, start_at, end_at, quantity_total, quantity_left, active)
values
  ('Drop del giorno - Mega Occasione', now(), date_trunc('day', now()) + interval '19 hours', 100, 100, true),
  ('Bundle 3 box a 25€', now(), date_trunc('day', now()) + interval '19 hours', 40, 40, true)
on conflict do nothing;

insert into rewards (name, points_cost, type, value, active)
values
  ('Sconto 5€', 500, 'discount', 5, true),
  ('Box gratuita', 900, 'free_box', 1, true)
on conflict do nothing;
