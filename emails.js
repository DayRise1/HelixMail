const emails = [
  {
    id: "Since you still have them...",
    subject: "Since you still have them...",
    sender: "<b>Phineas Murdoch</b> (alfonse@bostonshairdos.com)",
    date: "Apr 9",
    unread: true,
    body: `
     <p>Hey Jonas, </p>
<p>I hope you&#39;re doing well, my friend. Things out here are tough. That Abstergo warehouse in Nevada was exactly what we thought it was and we managed to delay it – at least for now. We&#39;re hanging in there though, cover&#39;s still intact and no one the wiser.</p>
<p>Anyway, down to business. We found another commonality in that group you&#39;re sheltering. If they&#39;re willing to head back into the Animus, we&#39;d love for them to investigate a Piece of Eden their ancestors interacted with in 1883. Let me know if they can and I&#39;ll send more notes. </p>
<p>Stay safe. </p>
<blockquote>
<p>NIT;EIP</p>
<p>Phineas</p>
</blockquote>

    `
  },

  {
    id: "ADB Update 4/8/2026",
    subject: "ADB Update 4/8/2026",
    sender: "<b>Jonas Webber</b> (asher@bostonshairdos.com)",
    date: "Apr 8",
    unread: true,
    body: `
      <p>The mission was successful. Unfortunately that&#39;s the good news. We barely escaped the Templars by the skin of our teeth, Bill. I thought our guys were supposed to keep them occupied?
Oh well, we tried our best with what we had.
Our men were rough upon acquiring our witnesses but unfortunately that&#39;s to be expected at this point – we aren&#39;t known for kindness and warm hugs after all.</p>
<p>Jason, Callum, and Dmitry entered the Animus with no issues – although the Bleeding Effect did present itself sooner than expected (did we ever recover that report about specific memories triggering more effects?) but in the end it proved useful with what we were up against.</p>
<p>The three of them lived through a train heist in 1941 as Diana Monroe, Nicholas Saylor, and Jack Booth, where they attempted to recover files from the Manhattan Project that were on the verge of being delivered to Nazi Germany. Upon arriving, they skydived through French airspace and landed on the train without alerting any of the guards on board.</p>
<p>Deciding their version of a best approach, Saylor decoupled a train car full of civilians to isolate them from the damage. (A bit questionable in my opinion, but it was eighty years ago so what can I do about it?) The three Assassins managed to take down all the guards resting in the now-rear train car, interrogating the last one regarding his personal philosophies (seriously, who just asks &#39;Why are you a Nazi?&#39; – Saylor was a hell of an Assassin but his social skills left a lot to be desired, understandable considering he grew up in the Brotherhood. You know what that&#39;s like, Bill?) and for information on the files – which he had none. </p>
<p>The Assassins moved forward, Monroe from above and the men through, into a dining car where they met James Knight, a Templar masquerading as a bartender. (Keep an eye out and be practically invisible in a way only waitstaff can be? I can respect that.) Booth and Saylor successfully lured Knight away and interrogated him before killing him while Monroe located the files within the luggage compartment.</p>
<p>Returning to the dining car to consider their further plans, the Assassins were ambushed by Thomas Bell, the Templar in charge of delivering the files to the Nazis in the first place. He held an Apple of Eden (PE7, according to Abstergo&#39;s internal database) which he used on Saylor to incapacitate the Assassins while he recovered the files. </p>
<p>Saylor managed to temporarily stun Booth while Monroe attempted to destroy the files with her hidden blade – which she succeeded in against Bell&#39;s threats. Bell then changed tactics, using the Apple to make Saylor into a hostage while buying him a chance to escape. He almost succeeded if not for the high winds outside, throwing him off-balance and making him drop the Apple inside. (Clearly Templar physical conditioning isn&#39;t quite as good as ours, eh Bill?)</p>
<p>According to our files, the Assassins then hid the Apple in a farm right on the France-Germany border, where it remains to this day. I forwarded the information to Walker and Dorian in France – they&#39;ve confirmed that they&#39;re sending men out to recover the Apple as we speak.</p>
<p>The witnesses woke up from the Animus seemingly in perfect health – much better than some other first-time subjects but we didn&#39;t have time for the slow initiation – only for Templars to come knocking at our door. (Already have securing the LAN connection on my list, don&#39;t worry.) I loaned them a few hidden blades for the attack and we managed to fight off the Templars, at the cost of Jason and Callum&#39;s health. They&#39;re banged up pretty bad but I have some medics patching them up. </p>
<p>Once they&#39;re awake I&#39;m thinking we head to the upstate safe house. I know they&#39;re going to want to go home but until we&#39;re sure that Abstergo isn&#39;t onto <em>them</em> it isn&#39;t safe. Plus I know first-hand how addictive the Animus can be – I have a feeling at least one of them will want another go. </p>
<p>Let me know what you think when you can, I know you&#39;re busy out there.</p>
<blockquote> 
<p>NIT;EIP</p>
<p>Jonas Webber</p>
</blockquote>

    `
  },

  {
    id: "shipment",
    subject: "RE: Shipment Delay",
    sender: "logistics@abstergoshipping.com",
    date: "Apr 4",
    unread: false,
    body: `
      <h2>Shipment HX-448</h2>
      <p>Delay confirmed on item 145786 "RTX 4090".</p>
      <p>New arrival window: April 17</p>
    `
  },

  {
    id: "access",
    subject: "Callum",
    sender: "alex@bostonshairdos.com",
    date: "Mar 28",
    unread: false,
    body: `
      <p>For a PI he has no idea we're onto him.</p>
      <p>He'll be at the location on-time, don't worry.</p>
      <blockquote> 
<p>Sam Leitner</p>
</blockquote>
    `
  },

  {
    id: "lunch",
    subject: "Jason",
    sender: "abigail@bostonshairdos.com",
    date: "Mar 11",
    unread: false,
    body: `
      <p>He seems like nothing more than a normal crook, but if you're sure about this Jonas, we'll have him there.</p>
      <blockquote> 
<p>Luke Jackson</p>
</blockquote>
    `
  },

  {
    id: "encrypted",
    subject: "Dmitry",
    sender: "arthur@bostonshairdos.com",
    date: "Mar 14",
    unread: false,
    body: `
      <p>How could he be her descendant? He's barely a functioning adult, he punches people for fun.</p>
      <p>We could get the DNA sample other ways, just saying. Lousy connection or not, it's better than hunting this loser...</p>
      <blockquote> 
<p>Jennifer Chase</p>
</blockquote>
    `
  }
];