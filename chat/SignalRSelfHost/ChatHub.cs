using Microsoft.AspNet.SignalR;

namespace SignalRSelfHost
{
    public class ChatHub : Hub
    {
        public void Connected(string name)
        {
            System.Console.WriteLine("User " + name + " connected.");
            Clients.Others.greetingToAll(name);
            Clients.Caller.greetingToUser();
        }

        public void Send(string name, string message)
        {
            System.Console.WriteLine("User " + name + " sent message: " + message);
            Clients.All.sendMessage(name, message);
        }

        public void Disconnected(string name)
        {
            System.Console.WriteLine("User " + name + " disconnected.");
            Clients.Others.farewell(name);
        }
       
    }
}
