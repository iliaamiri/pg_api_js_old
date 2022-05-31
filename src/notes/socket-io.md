
# Situations where I need Socket io

* in the middle of the game

# Possible events
These are some possible events that will exist and benefit from the power of Web Socket, _Socket.io_, in particular.

## table


### table.leave
Player will leave the table. The connected socket has the table id.

### table.fetch
Player wants to receive all the current information about the table and the game that is going.

* Request parameter(s):
```
{
    table_id: ObjectId
}
```

* Response parameter(s):
```
{
    capacity: Int,
    table_watermark_image: String,
    current_pot_amount: Decimal, 
    dealer_player_id: Int,
    players: {
        <player_id>: {
            name: String,
            avatar: String,
            balance: Decimal,
            pot_amount: Decimal,
            status: String
        }
    }
}
```

## Hand

### hand.start
* Response parameter(s):
```
{
    big_blinder: <big_blinder_player_id>,
    small_blinder: <small_blinder_player_id>,
    dealer: <dealer_player_id>,
    current_turn: <current_turn_player_id>,
    my_couple_cards: Array
}
```

### hand.round.finish
Each player's calls/bets pots will be gathered in to the center and will be added to the total pot.

### hand.round.next
* Response parameter(s):
```
{
    current_turn: <current_turn_player_id>,
    new_revealed_card: String
}
```

### hand.over
* Response parameter(s):
```
{
    is_draw: Boolean,
    winner_player_id: Int,
    should_hands_reveal: Boolean,
    players_hands: {
        <player_id>: {
            couple_cards: Array,
            highest_rank_title: String 
        }, and more...
    }
}
```
Note: _players_hands_ parameter will contain all the players who last until the end of the hand.

!!! **IMPORTANT**: the _players_hands_ parameter will be visible **only** when the _should_hands_reveal_ is _true_ !!!


### hand.bet
* Request parameter(s):
```
{
    bet_amount: Decimal
}
```

### hand.bet.sync
* Response parameter(s):
```
{
    player_id: Int,
    bet_amount: Decimal
}
```

### hand.call
Player will just call the bet amount. _No parameters are needed_.

### hand.call.sync
* Response parameter(s):
```
{
    player_id: Int,
    call_amount: Decimal
}
```

### hand.check
Player will just check. _No parameters are needed_.

### hand.check.sync
* Response parameter(s):
```
{
    player_id: Int,
}
```

### hand.fold
Player will just fold. _No parameters are needed_.

### hand.fold.sync
* Response parameter(s):
```
{
    player_id: Int,
}
```

## gameChat

### gameChat.send
* Request parameter(s):
```
{
    message: String,
}
```

### gameChat.newMessage
* Response parameter(s):
```
{
    message: String,
    sender_player_id: Int,
}
```

### gameChat.announcement.sync
* Response parameter(s):
```
{
    message: String,
}
```

### gameChat.private
Message to another player who is seating in the table

* Request parameter(s):
```
{
    pv_message: String,
    recipient_player_id: Int,
}
```

### gameChat.private.sync
Message from another player who is seating in the table

* Response parameter(s):
```
{
    pv_message: String,
    sender_player_id: Int,
}
```