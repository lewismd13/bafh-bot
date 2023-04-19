import { chatPrivate, getClanId, print } from "kolmafia";
import { Clan } from "libram";

export function main(_sender: string, message: string, _channel: string): void {
  print(`New message from ${_sender} in channel ${_channel} saying "${message}"`, "yellow");

  if (getClanId() !== 90485) Clan.join("Bonus Adventures from Hell");

  const bafh = Clan.get();

  if (message.includes("whitelist bafh") && !_channel) {
    bafh.addPlayerToWhitelist(_sender);
    chatPrivate(_sender, "You've been whitelisted to bafh, enjoy hell!");
    print(`${_sender} has been whitelisted to bafh`, "yellow");
  } else if (!_channel) {
    chatPrivate(
      _sender,
      `I'm sorry, I didn't understand that. Please say "whitelist bafh" if you want a wl`
    );
    print(`Unknown message from ${_sender}`, "red");
  }
}
