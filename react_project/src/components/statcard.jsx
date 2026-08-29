function StatCard({
                      title,
                      value,
                      icon,
                      description,
                      trend
                  }) {

    return (
        <div className="stat-card">

            <div className="stat-card-top">

                <div className="stat-icon">
                    {icon}
                </div>

                {trend && (
                    <span className="stat-trend">
            {trend}
          </span>
                )}

            </div>

            <div className="stat-content">

                <p>{title}</p>

                <h2>{value}</h2>

                <span>
          {description}
        </span>

            </div>

        </div>
    );
}

export default StatCard;