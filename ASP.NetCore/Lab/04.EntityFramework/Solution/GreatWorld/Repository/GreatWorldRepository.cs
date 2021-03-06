using GreatWorld.Data;
using GreatWorld.Models;
using Microsoft.EntityFrameworkCore;

namespace GreatWorld.Repository
{
    public class GreatWorldRepository : IGreatWorldRepository
    {
        private GreatWorldWithEFContext _context;

        public GreatWorldRepository(GreatWorldWithEFContext context)
        {
            _context = context;
        }


        public IEnumerable<Trip> GetAllTrips()
        {
            return _context.Trips.OrderBy(t => t.Name).ToList();
        }


        public IEnumerable<Trip> GetAllTripsWithStops()
        {
            return _context.Trips
                .Include(t => t.Stops)
                .OrderBy(t => t.Name).ToList();
        }
    }

}
