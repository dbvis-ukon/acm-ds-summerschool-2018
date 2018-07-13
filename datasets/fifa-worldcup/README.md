# FIFA World Cup Data

Data source: https://www.kaggle.com/abecklas/fifa-world-cup

**Context**: The FIFA World Cup is a global football competition contested by the various football-playing nations of the world. It is contested every four years and is the most prestigious and important trophy in the sport of football.

**Content**: The World Cups dataset show all information about all the World Cups in the history, while the World Cup Matches dataset shows all the results from the matches contested as part of the cups.

**Acknowledgements**: This data is courtesy of the FIFA World Cup Archive website.

**License**: [CC0 1.0 Universal (CC0 1.0) Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/)

## WorldCupMatches.csv

Contains a list of world cup matches, 852 records

| Field | Description |
| -- | -- |
| Year | the year in which the match was played |
| Datetime | the Date on which the match was played along with a 24 hour format time |
| Stage | the stage at which the match was played  |
| Stadium | stadium name where the match was held |
| City | the city name, where the match was played |
| Home Team Name | home team country name |
| Home Team Goals | total goals scored by the home team by the end of the match |
| Away Team Goals | total goals scored by the away team by the end of the match |
| Away Team Name | away team country name |
| Win Conditions | special win condition (if any) |
| Attendance | total crowd present at the stadium |
| Half-time Home Goals | goals scored by the home team until half time |
| Half-time Away Goals | goals scored by the away team until half time |
| Referee | name of the first refree |
| Assistant 1 | name of the first assistant referee (linesman) |
| Assistant 2 | name of the second assistant referee (linesman) |
| RoundID | unique ID of the Round |
| MatchID | unique ID of the match |
| Home Team Initials | home team country's three letter initials |
| Away Team Initials | away team country's three letter initials |

## WorldCupPlayers.csv

List of world cup players, 37,785 records

| Field | Description |
| -- | -- |
| RoundID | Unique ID  of the round |
| MatchID |  Unique ID of the match |
| Team Initials | Player's team initials |
| Coach Name| Name and country of the team coach |
| Line-up| `S`=Line-up, `N`=Substitute |
| Shirt Number| Shirt number if available |
| Player Name| Name of the player |
| Position| `C`=Captain, `GK`=Goalkeeper |
| Event| `G`=Goal, `OG`=Own Goal, `Y`=Yellow Card, `R`=Red Card, `SY` = Red Card by second yellow, `P`=Penalty, `MP`=Missed Penalty, `I` = Substitution In, `O`=Substitute Out |

## WorldCups.csv

All FIFA world cups, 20 records

| Field | Description |
| -- | -- |
|Year | Year of the worldcup |
|Country | Country of the worldcup |
|Winner | Team who won the worldcup |
|Runners-Up | Team who was the second place |
|Third | Team who was the third place |
|Fourth | Team who was the fourth place |
|GoalsScored | Total goals scored in the worldcup |
|QualifiedTeams | Total participating teams |
|Matches | PlayedTotal matches played in the cup |
|Attendance | Total attendance of the worldcup |