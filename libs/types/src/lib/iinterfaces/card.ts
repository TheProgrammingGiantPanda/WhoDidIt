import { CardType } from '../enums/cardtypes';
import { Characters } from '../enums/characters';
import { Places } from '../enums/places';
import { Weapons } from '../enums/weapons';

// ### Card
export interface Card {
  type: CardType;
  value: Characters | Places | Weapons;
}
// ### EndCard
